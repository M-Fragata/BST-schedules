import dayjs from "dayjs";

// Selecionar as Sessões manhã, tarde, noite.
const periodMorning = document.querySelector('#period-morning')
const periodAfternoon = document.querySelector('#period-afternoon')
const periodNight = document.querySelector('#period-night')

export function schedulesShow({ dailySchedules }) {
    try {
        // Limpa as listas.
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        // Renderiza os agendamentos por período.
        dailySchedules.forEach((schedule) => {
            // Criando as tags HTML
            const item = document.createElement('li')
            const time = document.createElement('strong')
            const name = document.createElement('span')

            // Adiciona o id do agendamento
            item.setAttribute("data-id", schedule.id)
            // Adiciona o dia do agendamento
            time.textContent = dayjs(schedule.when).format("HH:mm")
            // Adiciona o nome do agendado
            name.textContent = schedule.name

            // Cria o ícone de cancelar o agendamento.
            const cancelIcon = document.createElement('img')
            cancelIcon.classList.add('cancel-icon')
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")
            
            // Adiciona o tempo, nome e icone no item (li).
            item.append(time, name, cancelIcon)

            // Obtém somente a hora
            const hour = dayjs(schedule.when).hour()

            //Renderizar o agendamento na sessão (manhã, tarde, noite)
            if (hour <= 11) {
                periodMorning.appendChild(item)
            } else if (hour <= 17) {
                periodAfternoon.appendChild(item)
            } else if (hour <= 21) {
                periodNight.appendChild(item)
            }

        })

    } catch (error) {
        console.log(error)
        alert("Não foi possível exibir os agendamentos")
    }
}