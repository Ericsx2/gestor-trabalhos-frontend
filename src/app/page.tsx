import Image from "next/image";
import ProjectSearch from "./project-search/page";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-4/5 bg-blue-900 flex p-6">
        <div className="h-full w-1/2 m-6">
          <div className="h-1/3 flex items-end">
            <h1 className="text-4xl text-white font-bold">
              Gestor de <br />
              <span className="text-yellow-300 text-4xl font-bold">
                Trabalhos
              </span>
            </h1>
          </div>
          <div className="h-1/3 mt-4">
            <p className="text-white font-medium text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptates, voluptate veritatis exercitationem possimus ratione
              officia dolores modi molestias laboriosam velit culpa omnis fuga,
              tempora fugit praesentium, delectus vel sequi! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Accusamus voluptates,
              voluptate veritatis exercitationem possimus ratione officia
              dolores modi molestias laboriosam
            </p>
          </div>
          <div className="h-1/3">
            <div className="w-1/5 text-center p-3 font-semibold bg-yellow-300 rounded">
              <a href="http://">Saiba Mais</a>
            </div>
          </div>
        </div>
        <div className="h-full w-1/3">
          <div className="h-full w-full grid place-content-center">
            <Image
              src="/homepageImage.png"
              alt="homepage Image"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="h-auto">
        <ProjectSearch />
      </div>
    </main>
  );
}
