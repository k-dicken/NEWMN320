import { useState, useEffect } from 'react';

export default function Example() {

	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		fetch('data.json')
			.then((res) => res.json())
			.then((dataObject) => {
                console.log(dataObject);
				setPhotos(dataObject);
			});
    }, []);

    
}