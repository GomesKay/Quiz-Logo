import { Link } from "react-router-dom"

export function Content() {
  return (
    <div className="flex flex-col items-center gap-12">
      <h1 className="font-bold text-2xl">Bem-Vindo ao Quiz Logo</h1>
      <p className="font-light text-xl">Escolha a dificuldade abaixo:</p>

      <div className="flex flex-col gap-5 text-xl">
        <Link
          to="/easy"
          className="flex justify-center p-3 w-[300px] rounded-xl border border-green-400 bg-green-700 hover:bg-green-800 hover:duration-200"
        >
          Fácil
        </Link>
        <Link
          to="/medium"
          className="flex justify-center p-3 w-[300px] border border-blue-400 rounded-xl bg-blue-700 hover:bg-blue-800 hover:duration-200"
        >
          Médio
        </Link>
        <Link
          to="/difficult"
          className="flex justify-center p-3 w-[300px] border border-red-400 rounded-xl bg-red-700 hover:bg-red-800 hover:duration-200"
        >
          Difícil
        </Link>
      </div>
    </div>
  )
}
