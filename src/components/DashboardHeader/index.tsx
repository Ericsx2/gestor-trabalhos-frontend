export default function DashboardHeader(nome: String, funcao: String) {
  return (
    <header className="bg-white py-4 px-4 flex ml-64 items-center justify-end h-24">
      <div className="mr-4">
        <div className="text-gray-700 font-semibold">
          {nome ? nome : "Usuário"}
        </div>
        <div className="text-gray-400 text-sm">
          {funcao ? funcao : "Funcao"}
        </div>
      </div>

      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
    </header>
  );
}
