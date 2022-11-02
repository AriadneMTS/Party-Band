import axios from 'axios'
import { useEffect, useState } from 'react'
import banner from './../../imagens/banner.jpg'
import './style.css'
import { Card } from './../../components/Card'

export const Home = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/servicos')
            .then((resposta) => {
                setCards(resposta.data)
            })
    }, [])

    return (
        <>

            <div
                className='divImageHome'
            >
                <img
                    className='imgHome'
                    src={banner}
                />
            </div>

            <div
                className='container'
            >
                <h4 className='text-center'>Porque nos escolher?</h4>
                <p className='text-center'>Conheça nossos serviços</p>

                <div
                    className='d-flex justify-content-around'
                >
                    {
                        cards.map((element, index) =>
                            <Card
                                titulo={element.titulo}
                                descricao={element.descricao} 
                            />
                        )
                    }



                </div>


            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.806466997736!2d-53.28367698458022!3d-23.75427987463088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2d1e658459f85%3A0x7b81c993c8545f96!2sFaculdade%20ALFA%20Umuarama%20-%20UniALFA!5e0!3m2!1spt-BR!2sbr!4v1666048096562!5m2!1spt-BR!2sbr"
                width="100%"
                height="450px"
                style={{ border: 0 }}
                loading="lazy"
            >

            </iframe>



        </>
    )
}