<h2 align="center">Homework 1👋</h2>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Internet Engineering Course Homework 1

> http://stark-basin-17794.herokuapp.com

## API
### API Resources
  - [Add a polygon](#add-a-polygon)
  - [Test a point](#test-a-point)
  
#### Add a polygon
`PUT /gis/addpolygon`

Request body:

    {
        "type": "Feature",
        "properties": {
      	    "name":"re"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        10,
                        10
                    ],
                    [
                        50,
                        10
                    ],
                    [
                        10,
                        50
                    ],
                    [
                        10,
                        10
                    ]
                ]
            ]
        }
    }

#### Test a point
`GET /gis/testpoint`

Query params:

    lat: 10
    long: 10

Response body:

    {
        "polygons": [
            "ret"
        ]
    }
    
## Author
👤 **Mohammad Seyfayi**

* Github: [@madsams](https://github.com/madsams)
* Student ID: 96243033