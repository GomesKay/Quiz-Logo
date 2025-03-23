import { useState } from "react"
import { toast } from "sonner"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { questions } from "../../questions/easy"

export function Easy() {
  // Variáveis de estado
  const [quizScore, setQuizScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textButton, setTextButton] = useState("Responda")
  const [disabledLink, setDisabledLink] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(true)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  // Função para verificar resposta
  function handleCheckQuestion(index) {
    const clickedOption = questions[currentIndex].options[index]

    if (clickedOption.isCorrect) {
      setDisabledLink(true)
      setInputDisabled(false)
      setButtonDisabled(true)
      setQuizScore(quizScore + 1)
      setTextButton("Próxima Questão")
      toast.success("Você Acertou!")
    } else {
      setDisabledLink(true)
      setInputDisabled(false)
      setButtonDisabled(true)
      setTextButton("Próxima Questão")
      toast.error("Resposta Errada!")
    }
  }

  // Próxima questão
  function handleNextQuestion() {
    if (currentIndex === questions.length - 1) {
      setDisabledLink(false)
      setTextButton("Fim do Quiz!")
      toast.info(`Pontuação Final: ${quizScore} de ${questions.length}`)
    } else {
      setInputDisabled(true)
      setButtonDisabled(false)
      setCurrentIndex(currentIndex + 1)
    }
  }
  return (
    <main className="@container flex justify-center pt-32 h-screen font-sans text-3xl text-white bg-gradient-to-l from-teal-600 to-cyan-600">
      <div className="flex flex-col items-center gap-28">
        <h1 className="font-bold">Dificuldade Fácil</h1>

        <img
          src={questions[currentIndex].img}
          alt="Imagens Logo"
          className="w-[236px] rounded-xl cursor-pointer"
        />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-[440px] font-normal text-xl @max-[470px]:flex-col @max-[470px]:items-center">
          {questions[currentIndex].options.map((option, index) => (
            <button
              key={index}
              type="button"
              value={option.isCorrect}
              disabled={buttonDisabled}
              onClick={() => handleCheckQuestion(index)}
              className="p-3 w-52 rounded-xl bg-slate-900 hover:bg-slate-950 hover:duration-200 disabled:cursor-no-drop disabled:opacity-80"
            >
              {option[Object.keys(option)[0]]}
            </button>
          ))}

          <input
            type="button"
            value={textButton}
            disabled={inputDisabled}
            onClick={handleNextQuestion}
            className="p-3 w-52 rounded-xl cursor-pointer bg-slate-900 hover:bg-slate-950 hover:duration-200 disabled:cursor-no-drop disabled:opacity-80"
          />

          <Link
            to="/"
            aria-disabled={disabledLink}
            className="flex items-center gap-2 text-lg aria-disabled:hidden hover:underline hover:duration-200"
          >
            <ArrowLeft size={20} />
            Voltar
          </Link>
        </div>
      </div>
    </main>
  )
}
