import PropTypes from 'prop-types';

const newMessage = {
    message: 'Yeison',
    edad: 31
};

// const getMensaje = (a, b) => {
//     return (a + b);
// }

// Componente funcional
export const FirstApp = ({ title, subtitle, name }) => {

    // if (!title) {
    //     throw new Error('El titulo no existe');
    // }
    return (
        <>
            <div data-testid="test-title">{title}</div>
            {/* <h2>{getMensaje(1, 2)}</h2> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}

// Se deben colocar al Final
// -----------------------------------
// Validar tipos de datos con PropTypes
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

// Definir valores por defecto de las props
FirstApp.defaultProps = {
    name: 'Yeison Molina',
    subtitle: 'No hay subtitulo'
    // title: 'No hay título'
}