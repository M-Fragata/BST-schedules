import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedules-cancel.js"

const periods = document.querySelectorAll('.period')

periods.forEach((period) => {

    period.addEventListener('click', async (event) => {

        if (event.target.classList.contains('cancel-icon')) {
            const item = event.target.closest("li")

            // Pega o id do agendamento para remover.
            const { id } = item.dataset

            // Confirma que o id foi selecionado
            if (id) {
                // Confirma se o usuário quer realmente cancelar o agendamento
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if (isConfirm) {

                    console.log(typeof(id))
                    // Faz a requisição na API para cancelar o agendamento de acordo com ID
                    await scheduleCancel({ id })

                    // Recarrega os agendamentos
                    schedulesDay()
                }
            }
        }



    })

})