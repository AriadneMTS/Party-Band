import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa'

export const Footer = () => {
    return(
        <>
            <footer style={{
                backgroundColor: '#383838',
                paddingBottom: 15,
                paddingTop: 15,
                textAlign: 'center',
                color: '#fff'
            }}>
                <p>Desenvolvido por Ariadne Santana - {new Date().getUTCFullYear()}</p>

                <div className="d-flex justify-content-center">

                    <FaTwitter style={{margin: 10}} color='#fff'/>
                    <FaInstagram style={{margin: 10}} color='#fff'/>
                    <FaFacebook style={{margin: 10}} color='#fff'/>

                </div>

            </footer>
        </>
    )
}