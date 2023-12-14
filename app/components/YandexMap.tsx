'use client'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const YandexMap = () => {

    return (
        <div className='lg:mt-[20px]'>
            <YMaps>
                <div>
                    <Map className='h-[400px] w-[400px] sm:w-[200px] sm:h-[200px]' defaultState={{ center: [43.12206645701487, 131.92549973313513], zoom: 17 }} >
                        <Placemark defaultGeometry={[43.12206645701487, 131.92549973313513]} />
                    </Map>
                </div>
            </YMaps>
        </div>
    )


};

export default YandexMap;