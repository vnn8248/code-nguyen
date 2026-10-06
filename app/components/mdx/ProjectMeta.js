import { Octokit } from 'octokit';
import Avatars from './Avatars';

const headers = { 'X-GitHub-Api-Version': '2022-11-28' };

const authedOctokit = process.env.GITHUB_ACCESS_TOKEN
    ? new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN })
    : null;
const publicOctokit = new Octokit();

// Looks up a GitHub user for their avatar. Falls back to an unauthenticated
// request if the token is rejected, and to null if GitHub can't be reached,
// so a bad token or rate limit doesn't fail the build.
const getUser = async (login) => {
    const request = (octokit) =>
        octokit.request('GET /users/{username}', { username: login, headers });

    try {
        if (authedOctokit) {
            try {
                return (await request(authedOctokit)).data;
            } catch (e) {
                if (e.status !== 401) throw e;
                console.warn('GITHUB_ACCESS_TOKEN was rejected; retrying without it.');
            }
        }

        return (await request(publicOctokit)).data;
    } catch (e) {
        console.warn(`Could not load GitHub user "${login}": ${e.message}`);
        return null;
    }
};

const ProjectMeta = async (props) => {
    const names = props.team.map((p) => p.name);
    const users = await Promise.all(props.team.map((p) => getUser(p.user)));

    return (
        <div className="grid p-0 mx-auto w-full grid-cols-24 max-w-screen-2xl">
            <div className="item col-start-1 col-end-25 md:col-start-3 md:col-end-23 lg:col-start-5 lg:col-end-22 lg:pb-0">
                <div className="overview pt-6 sm:flex sm:flex-row sm:justify-center">
                    <div className="mb-5 mx-5 block text-sm md:inline-block lg:text-lg lg:mx-10">
                        <div className="title mb-3.5 meta font-bold">Timeline</div>
                        <div className="inner">{props.timeline}</div>
                    </div>
                    <div className="mb-5 mx-5 block text-sm md:inline-block lg:text-lg lg:mx-10">
                        <div className="title mb-3.5 meta font-bold">Team</div>
                        <Avatars users={users} names={names} />
                    </div>
                    <div className="mb-5 mx-5 block text-sm md:inline-block lg:text-lg lg:mx-10">
                        <div className="title mb-3.5 meta font-bold">Role</div>
                        <div className="inner">{props.role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectMeta;
