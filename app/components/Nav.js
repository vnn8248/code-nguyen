import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = ({ scrolled }) => {
    const pathname = usePathname();
    let projectPath;

    if (pathname.includes('/projects')) {
        projectPath = pathname;
    }

    return (
        <nav className="mx-auto mt-8 flex justify-center items-center relative z-[100] max-w-screen-2xl">
            <ul
                className={`flex p-2.5 flex-row justify-center items-center list-none rounded-full transition-all duration-200 ease-linear ${
                    scrolled ? 'faded' : 'bg-none'
                }`}
            >
                <li className="flex relative">
                    <Link
                        href="/"
                        className={`my-0 mx-1 p-2.5 flex items-center transition-all duration-200 ease-in-out no-underline rounded-3xl font-link md:mx-1.5 md:py-2.5 md:px-5 ${
                            pathname == '/' || pathname == projectPath ? 'bg-[#40e2a1]' : ''
                        }`}
                    >
                        <span>Work </span>
                        <span className="ml-2 text-blue-500 px-2 border-2 rounded">/</span>
                    </Link>
                </li>
                <li className="flex relative">
                    <Link
                        href="/about"
                        className={`my-0 mx-1 py-3 px-2.5 flex items-center transition-all duration-200 ease-in-out no-underline rounded-3xl font-link md:mx-1.5 md:py-3 md:px-5 ${
                            pathname == '/about' ? 'bg-[#ff6666]' : ''
                        }`}
                    >
                        About
                    </Link>
                </li>
                <li className="flex relative">
                    <Link
                        href="/personal"
                        className={`my-0 mx-1 py-3 px-2.5 flex items-center transition-all duration-200 ease-in-out no-underline rounded-3xl font-link md:mx-1.5 md:py-3 md:px-5 ${
                            pathname == '/personal' ? 'bg-[#7cb2e8]' : ''
                        }`}
                    >
                        Play
                    </Link>
                </li>
                {/* <li className="flex relative">
                    <Link
                        href="/blog"
                        className={`my-0 mx-1 py-3 px-2.5 flex items-center transition-all duration-200 ease-in-out no-underline rounded-3xl font-link md:mx-1.5 md:py-3 md:px-5 ${
                            pathname == '/blog' ? 'bg-[#665cbe] text-slate-100' : ''
                        }`}
                    >
                        Blog
                    </Link>
                </li> */}
                <li className="flex relative">
                    <Link
                        href="/contact"
                        className={`my-0 mx-1 py-3 px-2.5 flex items-center transition-all duration-200 ease-in-out no-underline rounded-3xl font-link md:mx-1.5 md:py-3 md:px-5 ${
                            pathname == '/contact' ? 'bg-[#ff69f8] text-slate-800' : ''
                        }`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
