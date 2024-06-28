import { ulid } from 'ulid';
import moment from 'moment';

function generateTitle() {
    const ulidValue = ulid();

    return `QA-${moment().format('YYYYMMDD')}-${ulidValue}`
}

export const petCreate =
{
    "id": 10,
    "name": "testLucas",
    "category": {
        "id": 1,
        "name": "Dogs"
    },
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "status": "available"
}

export const petUpdate =
{
    "id": 10,
    "name": "doggie",
    "category": {
        "id": 1,
        "name": "Dogs"
    },
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "status": "available"
}