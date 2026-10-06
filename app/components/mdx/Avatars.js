import Image from 'next/image';

const Avatars = ({ users, names }) => {
    return (
        <div className="inner flex flex-row relative">
            {users.map((u, i) => {
                return (
                    <div key={u?.login ?? names[i]} className="flex flex-col group">
                        <div className="hidden group-hover:block group-hover:absolute group-hover:bottom-12 group-hover:px-2 group-hover:bg-white group-hover:rounded">
                            <h4 className="group-hover:text-xs group-hover:py-0">{names[i]}</h4>
                        </div>
                        {u ? (
                            <Image
                                src={u.avatar_url}
                                alt={u.login}
                                width={40}
                                height={40}
                                loading="lazy"
                                className="mr-6 my-0 rounded-full border-2"
                            />
                        ) : (
                            // GitHub lookup failed; show the person's initial instead.
                            <div
                                aria-label={names[i]}
                                className="mr-6 my-0 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-slate-200 font-bold"
                            >
                                {names[i]?.[0]}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Avatars;
