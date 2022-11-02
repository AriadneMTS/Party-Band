import { Menu } from "../../components/Menu"
import { Footer } from "../../components/Footer"
import { useRef } from "react"

export const Contato = () => {

    const reForm = useRef();

    const submitForm = (e) => {
        e.preventDefault()

        if (reForm.current.checkValidity()) {

            let obj = new Object;
            for (let index = 0; index < reForm.current.length; index++) {

                const id = reForm.current[index]?.id;
                const value = reForm.current[index]?.value;

                if (id === 'botao') break;

                obj[id] = value

            }

        } else {
            reForm.current.classList.add('was-validated')
        }
    }
    return (
        <>
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItens: 'center',
                        paddingTop: '20'
                    }}
                >
                    <h2>Contato</h2>
                    <p>
                        Envie uma mensagem ou fale pelo whatsApp (55)5555-5555
                    </p>
                </div>
                <hr />

                <form
                    className="row g3 needs-validation"
                    noValidate style={{
                        paddingBottom: 20
                    }}
                    onSubmit={(e) => { submitForm(e) }}
                    ref={reForm}
                >
                    <div className="col-md-6">
                        <label
                            htmlFor="nome"
                            className="form-label"
                        >
                            Nome
                        </label>
                        <input
                            type='text'
                            className="form-control"
                            placeholder="Digite seu nome"
                            id="nome"
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor digite seu nome.
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="email"
                            className="form-label"
                        >
                            E-mail
                        </label>
                        <input
                            type='text'
                            className="form-control"
                            placeholder="Digite seu email"
                            id="email"
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor digite seu email.
                        </div>
                    </div>


                    <div className="col-md-12">
                        <label
                            htmlFor="descricao"
                            className="form-label"
                        >
                            Descrição
                        </label>
                        <textarea
                            className="form-control"
                            id="descricao"
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor digite uma descrição.
                        </div>
                    </div>




                    <div className="col-md-12">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            id="botao">

                            Enviar
                        </button>

                    </div>


                </form>
            </div>
        </>
    )
}