import Link from "./Link";

function Sidebar() {
    const links = [
        { labelToShow: 'Dropdown', path: '/' },
        { labelToShow: 'Accordion', path: '/accordion' },
        { labelToShow: 'Button', path: '/buttons' },
        { labelToShow: 'Modal', path: '/modal' },

    ]
    const renderedLinks = links.map((link) => {
        return <Link
            key={link.labelToShow}
            to={link.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {link.labelToShow}
        </Link>
    });

    return (
        <div className="sticky overflow-y-scroll top-0 flex flex-col items-start">
            {renderedLinks}
        </div>
    )
};

export default Sidebar;