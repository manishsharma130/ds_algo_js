/**
 * Graph data structure implementation using Hash-map (But we use Map data structure of Javascript)
 */

function Graph(v) {
	this.vertexs = [];
	if (typeof v === "number" && v > 0) this.vertexs = new Array(v);
	else
		throw new Error(
			"Please provide number of vertices for graph representation!."
		);
}

Graph.prototype.addEdge = function (x, y, bidr, wt) {
	if (!this.vertexs[x]) this.vertexs[x] = new Map();
	if (!this.vertexs[y]) this.vertexs[y] = new Map();
	this.vertexs[x].set(y, wt);
	if (bidr) this.vertexs[y].set(x, wt);
};

Graph.prototype.display = function () {
	this.vertexs.map((vertex, indexVertex) => {
		let pstr = `${indexVertex}:-> `;
		for (let [v, wt] of vertex) pstr += `(v:${v} w:${wt}) `;

		console.log(pstr);
		pstr = "";
	});
};

const g = new Graph(4);
g.addEdge(0, 1, true, 10);
g.addEdge(0, 2, true, 20);
g.addEdge(2, 3, true, 30);
g.addEdge(1, 2, true, 40);
g.display();
