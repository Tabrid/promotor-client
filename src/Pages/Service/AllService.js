import React, { useEffect, useState } from 'react';

import ServiceCard from './ServiceCard';

const AllService = () => {
    const [Services, setService] = useState([]);

    
    useEffect(() => {
        fetch('https://server-psi-puce.vercel.app/product')
            .then((response) => response.json())
            .then((data) => setService(data));
    }, [])

    return (
        <div className=' bg-gray-900'>
        <div className="card-actions justify-center">
    </div>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                Services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
                
        </div>
        </div>
    );
};

export default AllService;