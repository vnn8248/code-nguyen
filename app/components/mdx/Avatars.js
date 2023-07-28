import Image from 'next/image';

const Avatars = ({ users, names }) => {
    return (
        <div className="inner flex flex-row relative">
            {users.map((u, i) => {
                return (
                    <div key={i.login} className="flex flex-col group">
                        <div className="hidden group-hover:block group-hover:absolute group-hover:bottom-12 group-hover:px-2 group-hover:bg-white group-hover:rounded">
                            <h4 className="group-hover:text-xs group-hover:py-0">{names[i]}</h4>
                        </div>
                        <Image
                            src={u.avatar_url}
                            alt={u.login}
                            width={40}
                            height={40}
                            loading="lazy"
                            className="mr-6 my-0 rounded-full border-2"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Avatars;
