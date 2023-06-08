export default function CardComponent() {
  return (
    <div className="shadow-lg shadow-blue-500/50 w-full h-full rounded-md border-2 border-blue-800 overflow-hidden">
      <div className="flex-col">
        <div className="bg-blue-300 h-1/4 p-3">
          <div className="w-full p-2">
            <h1 className="text-xl">Projeto Blockchain</h1>
          </div>
          <div className="flex gap-1 justify-end">
            <div className="max-w-[200px] w-1/3 font-bold rounded-full text-center text-white  bg-purple-400 border-2 border-blue-800">
              <p>Professor</p>
            </div>
            <div className="max-w-[200px] w-1/3 font-bold rounded-full text-center text-white  bg-purple-400 border-2 border-blue-800">
              <p>Aluno</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 h-3/4 p-3 flex-col">
          <div className="text-lg">
            <div className="bg-blue-100 m-2">
              <h4>
                Projeto criado pelo professor jorge com o intuito de inaugurar o
                primeiro grupo de estudos de blockchain da América Latina que
                utiliza C.
              </h4>
            </div>
            <div className="rounded-lg text-center text-white bg-blue-400">
              <a href="https://tailwindcss.com/docs/border-width">
                Saiba Mais ...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
