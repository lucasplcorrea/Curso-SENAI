import { useState, useEffect } from 'react';

function Timer() {
  // Estados para controlar o tempo definido e o tempo restante
  const [minutes, setMinutes] = useState(1); // Valor padrão é 1 minuto
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false); // Controla se o timer está ativo

  // Função para lidar com a mudança no campo de minutos
  const handleInputChange = (e) => {
    setMinutes(e.target.value); // Atualiza o tempo definido pelo usuário
  };

  // Função para iniciar o temporizador
  const startTimer = () => {
    setIsActive(true); // Ativa o temporizador
  };

  // Efeito para controlar a contagem regressiva
  useEffect(() => {
    let interval = null;

    if (isActive && (seconds > 0 || minutes > 0)) {
      // Define o intervalo para o temporizador
      interval = setInterval(() => {
        if (seconds === 0 && minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000); // Executa a cada 1 segundo
    } else if (seconds === 0 && minutes === 0) {
      // Para o temporizador quando o tempo acabar
      setIsActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return (
    <div>
      <h1>Temporizador</h1>
      
      {!isActive && (
        <div>
          <input
            type="number"
            value={minutes}
            onChange={handleInputChange}
            min="1"
            placeholder="Defina os minutos"
          />
          <button onClick={startTimer}>Iniciar</button>
        </div>
      )}

      {isActive && (
        <div>
          <h2>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Timer;
