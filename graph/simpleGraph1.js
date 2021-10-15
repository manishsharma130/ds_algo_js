/**
 * This graph represetation in adjancey matrix
 * Reference:- https://www.youtube.com/watch?v=dhgKr8942rs&list=PLl4Y2XuUavmtTOvFcW3HfI1oQ3hsgkB3a&index=3
 * Instead of using linkedset we use set data structure
 */
function Graph(v) {
	this.vertexs = [];
	if (typeof v === "number" && v > 0) this.vertexs = new Array(v);
	else
		throw new Error(
			"Please provide number of vertices for graph representation!."
		);
}
Graph.prototype.addEdge = function (x, y) {
	if (!this.vertexs[x]) this.vertexs[x] = new Set();
	if (!this.vertexs[y]) this.vertexs[y] = new Set();
	this.vertexs[x].add(y);
	this.vertexs[y].add(x);
};
Graph.prototype.display = function () {
	this.vertexs.map((vertex, index) => {
		let printString = `${index}:-> `;
		for (let edge of vertex) {
			printString += ` ${edge}`;
		}
		console.log(printString);
		printString = "";
	});
};

Graph.prototype.bfs = function () {
	const queue = [];
	const visited = new Array(this.vertexs.length).fill(false);
	let str = "";
	queue.push(0);
	visited[0] = true;
	while (queue.length !== 0) {
		const node = queue[0];
		str += ` ${node}`;
		queue.shift();
		for (let nbr of this.vertexs[node]) {
			if (!visited[nbr]) {
				queue.push(nbr);
				// Mark that nbr as visisted
				visited[nbr] = true;
			}
		}
	}
	console.log("BFS: " + str);
};

Graph.prototype.dfs = function (src) {
	let str = "";
	const visisted = new Array(this.vertexs.length).fill(false);
	const vertices = this.vertexs;
	const dfsRec = (start) => {
		str += ` ${start}`;
		visisted[start] = true;
		for (let nbr of vertices[start]) {
			if (!visisted[nbr]) dfsRec(nbr);
		}
	};
	dfsRec(src !== undefined ? src : 0);
	console.log("DFS: " + str);
};

const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(2, 3);
g.addEdge(1, 2);
// g.display();
g.bfs();
g.dfs();
