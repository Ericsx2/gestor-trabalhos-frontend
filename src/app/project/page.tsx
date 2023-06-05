import { FileText, Github, Youtube } from "lucide-react";

export default function Project() {
    const project = {
        "title": "Título 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "subject": "Disciplina 1",
        "users": [
            { "name": "Professor 1", "role": "Professor" },
            { "name": "Aluno 1", "role": "Aluno" },
        ],
        "links": [
            { "name": "PDF", "url": "https://www.google.com", "icon": <FileText /> },
            { "name": "GitHub", "url": "https://www.google.com", "icon": <Github /> },
            { "name": "Youtube", "url": "https://www.google.com", "icon": <Youtube /> },
        ]
    }

    return (
        <main className="flex bg-blue-50 items-center justify-center h-screen">
            <div className="p-3 w-4/5">
                <div className="mb-4 font-medium">
                    <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
                    <p className="mb-4">{project.description}</p>
                    <p>Projeto desenvolvido para a disciplina: {project.subject}</p>
                    <div className="flex gap-2 flex-wrap">
                        Por:
                        {project.users.map((user, index) => [
                            index > 0 && "-",
                            <p className="underline">{user.name}</p>
                        ])}
                    </div>
                </div>
                <div>
                    <ul className="flex gap-2 flex-wrap">
                        {project.links.map((link, index) => (
                            <li className="border border-slate-400 rounded-sm hover:bg-blue-100">
                                <a href={link.url} target="_blank" className="flex items-center p-2 font-medium">
                                    {link.icon}<span className="ml-1">{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}