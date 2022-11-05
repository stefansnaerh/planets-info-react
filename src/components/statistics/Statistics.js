


import './Statistics.scss'




const Statistics = ({planetdata}) => {
    return (
        <section className='statistics-container'>
            <div className='statistics-box'>
                <h5>ROTATION TIME</h5>
                <h1>{planetdata.rotation.toUpperCase()}</h1>
            </div>
            <div className='statistics-box'>
                <h5>REVOLUTION TIME</h5>
                <h1>{planetdata.revolution.toUpperCase()}</h1>
            </div>
            <div className='statistics-box'>
                <h5>RADIUS</h5>
                <h1>{planetdata.radius.toUpperCase()}</h1>
            </div>
            <div className='statistics-box'>
                <h5>AVARAGE TEMP</h5>
                <h1>{planetdata.temperature.toUpperCase()}</h1>
            </div>
        </section>
    )
}

export default Statistics