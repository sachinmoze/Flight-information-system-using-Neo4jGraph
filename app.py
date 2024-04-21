from flask import Flask, request, jsonify, render_template, redirect, url_for
from py2neo import Graph

app = Flask(__name__)

graph = Graph("bolt://localhost/7687", auth=("neo4j", "1234567890"))

## create api for /api/shortest-distance?source=${sourceAirport}&destination=${destinationAirport}
@app.route('/api/shortest-distance', methods=['GET', 'POST'])
def get_shortest_distance():
    
    data = request.json
    source = data.get('source')
    destination = data.get('destination')
    print(source, destination)

    query = """MATCH p = shortestPath((start:Airport {desc: $source})-[:HAS_ROUTE*]->(end:Airport {desc: $destination}))
    RETURN [node in nodes(p) | node.desc] AS route, length(p) AS distance
    ORDER BY distance ASC
    LIMIT 1"""
    
    result = graph.run(query, source=source, destination=destination)
    res=result.data()[-1]
    return jsonify(res)


@app.route('/api/airports', methods=['GET'])
def get_airports():
    query = """
    MATCH (a:Airport)
    RETURN a.name as name, a.city as city, a.country as country
    """
    result = graph.run(query)
    jsonify(result.data())


@app.route('/')
def index():
    query = """MATCH (a:Airport) RETURN COLLECT(a.desc) AS airportDescriptions"""
    result=graph.run(query).data()
    airports_dest=result[-1].get('airportDescriptions')
    return render_template('index.html', data=airports_dest)

if __name__ == '__main__':
    app.run(debug=True)

