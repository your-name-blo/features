export interface PickUpPoint {
    id: string;
    name: string;
    city: string;
    address: string | null;
    distance: number | null;
}


function mapFromXmlDpdPoints(xmlText: string) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'application/xml');
    const error = xml.querySelector('parsererror');
    if (error) {
        return [];
    }

    const pudos = xml.querySelectorAll('PUDO_ITEMS');
    if (!pudos?.length) return [];

    const points: PickUpPoint[] = [];

    for (const pudo of pudos) {
        const ps = pudo.childNodes;
        for (const p of ps) {
            const point = mapFromXmlDpdPoint(p);
            if (point) points.push(point);
        }
    }

    return points;
}

function mapFromXmlDpdPoint(pudo: ChildNode): PickUpPoint | null {
    if (pudo.nodeName?.toLowerCase() !== 'pudo_item') return null;

    let id = null;
    let city = null;
    //todo check
    const distance = null;

    let address = null;

    for (const k of pudo.childNodes) {
        const nodeName = k.nodeName.toLowerCase();
        switch (nodeName) {
            case 'pudo_id':
                id = k.textContent;
                break;
            case 'address1':
                address = k.textContent;
                break;
            case 'city':
                city = k.textContent;
                break;
        }
        console.log(k);
    }

    if (!id || !city || !address) return null;

    return {
        id,
        name: id,
        city,
        address,
        distance,
    };
}

