import Select from "@/components/Select";
import { Github, FileText } from "lucide-react";
import  Input  from "@/components/Input";

function projectSearch(){
  const projects = [
    {
      "title": "Título do Projeto 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "links":[
      { "name": "PDF", "url": "https://www.youtube.com", "icon": <FileText /> },
      { "name": "GitHub", "url": "https://www.google.com", "icon": <Github /> },
      ]
    },
    {
      "title": "Título do Projeto 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "links":[
      { "name": "PDF", "url": "https://www.google.com", "icon": <FileText /> },
      { "name": "GitHub", "url": "https://www.google.com", "icon": <Github /> },
      ]
    },
    {
      "title": "Título do Projeto 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "links":[
      { "name": "PDF", "url": "https://www.google.com", "icon": <FileText /> },
      { "name": "GitHub", "url": "https://www.google.com", "icon": <Github /> },
      ]
    },
    {
      "title": "Título do Projeto 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "links":[
      { "name": "PDF", "url": "https://www.google.com", "icon": <FileText /> },
      { "name": "GitHub", "url": "https://www.google.com", "icon": <Github /> },
      ]
    },
    {
      "title": "Título do Projeto 5",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "links":[
      { "name": "PDF", "url": "https://www.google.com", "icon": <FileText /> },
      { "name": "GitHub", "url": "https://www.google.com", "icon": <Github /> },
      ]
    },
    {
      "title": "Título do Projeto 6",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "links":[
      { "name": "PDF", "url": "https://www.google.com", "icon": <FileText /> },
      { "name": "GitHub", "url": "https://www.google.com", "icon": <Github /> },
      ]
    },
  ]

  return(
    <main className="flex items-center justify-center h-screen bg-blue-50">

      <div className="grid gap-10">
        <div className="flex justify-start items-center gap-5">
            <Select/>
        </div>

        <div className="grid w-[979px]">
          <div className=" bg-blue-900 font-bold text-center text-white rounded-t-sm">
            <h1>Categoria e Nome / Nome / Categoria</h1>
          </div>

          <div className=" bg-white overflow-auto h-96" >
            {
                projects.map(
                  (item,i) => (
                    <div key={i} className="grid w-11/12 ml-8 mt-7 mb-3
                    rounded-2xl bg-gray-300 text-start p-10 gap-2">
                      <>
                      <h2 key={i} className=" text-2xl font-bold">{item.title}</h2>
                      <p key={i}>{item.description}</p>
                      
                      <div className="flex gap-2">
                      {
                        item.links.map(
                          (link,i) => (
                            <a key={i} href={link.url}>
                              {link.icon} <span>{link.name}</span>
                            </a>
                          )
                        )
                      }
                      </div>
                      </>
                    </div>
                  )
                )
              }
          </div>
        </div>
      </div>
    </main>
  )
}

export default projectSearch;
