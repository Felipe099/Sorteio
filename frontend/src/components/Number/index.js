import React from 'react';
import './styles.css';

const Number = () => {
  const handleRangeOfNumbers = (start, end) => {
      return Array(end - start + 1)
          .fill()
          .map((_, idx) => start + idx);
  };

  const printLeftZeros = (num, size) => {
      num = num.toString();
      while (num.length < size) num = '0' + num;
      return num;
  };

  var luckNumbers = handleRangeOfNumbers(0, 999);
    
    return (
        <>
                <section className="section" id="home">
                    <div className="container grid">
                        <div className="image">
                            <img
                                src="ASSETS/fotos/batista5.png"
                                alt="foto do premio"
                            />
                        </div>
                        <div className="text">
                            <h2 className="title">
                                Escolha seu número da sorte 🍀
                            </h2>

                            <div className="base_number">
                                {luckNumbers.map((number, index) => (
                                    <div key={index} className="quadrado">
                                        <div
                                            className="cotas-item"
                                            onClick={() => {}}
                                        >
                                            {printLeftZeros(number, 3)}
                                        </div>
                                        <span id="spanRelogio"></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="divider-1"></div>
        </>
    );
};

export default Number;
