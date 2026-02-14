#!/usr/bin/node

class Node {
    constructor(data = null) {
        this.data = data;
        this.adjacentNodes = [];
        this.parent = null;
    }
}

function createNode(data) {
    newNode = new Node(data);
    return newNode;
}


function checkValue(value) {
    if (value[0] < 0 || value[1] < 0 || value[0] > 7 || value[1] > 7) return null;
    return value;
}

//Up-right [x + 1, y + 2]
function moveUpRight(node) {
    let newValue = [];
    newValue[0] = node.data[0] + 1;
    newValue[1] = node.data[1] + 2;
    if (checkValue(newValue) === null) return;
    const newNode = new Node(newValue);
    node.adjacentNodes.push(newNode);
    newNode.parent = node;
    return newNode;
}

//Up-left [x - 1, y + 2]
function moveUpLeft(node) {
    let newValue = [];
    newValue[0] = node.data[0] - 1;
    newValue[1] = node.data[1] + 2;
    if (checkValue(newValue) === null) return;
    const newNode = new Node(newValue);
    node.adjacentNodes.push(newNode);
    newNode.parent = node;
    return newNode;
}

//Down-right [x + 1, y - 2]
function moveDownRight(node) {
    let newValue = [];
    newValue[0] = node.data[0] + 1;
    newValue[1] = node.data[1] - 2;
    if (checkValue(newValue) === null) return;
    const newNode = new Node(newValue);
    node.adjacentNodes.push(newNode);
    newNode.parent = node;
    return newNode;
}

//Down-left [x - 1, y - 2]
function moveDownLeft(node) {
    let newValue = [];
    newValue[0] = node.data[0] - 1;
    newValue[1] = node.data[1] - 2;
    if (checkValue(newValue) === null) return;
    const newNode = new Node(newValue);
    node.adjacentNodes.push(newNode);
    newNode.parent = node;
    return newNode;
}

//Right-up [x + 2, y + 1]
function moveRightUp(node) {
    let newValue = [];
    newValue[0] = node.data[0] + 2;
    newValue[1] = node.data[1] + 1;
    if (checkValue(newValue) === null) return;
    const newNode = new Node(newValue);
    node.adjacentNodes.push(newNode);
    newNode.parent = node;
    return newNode;
}

//Right-down [x + 2, y - 1]
function moveRightDown(node) {
    let newValue = [];
    newValue[0] = node.data[0] + 2;
    newValue[1] = node.data[1] - 1;
    if (checkValue(newValue) === null) return;
    const newNode = new Node(newValue);
    node.adjacentNodes.push(newNode);
    newNode.parent = node;
    return newNode;
}

//Left-up [x - 2, y + 1]
function moveLeftUp(node) {
    let newValue = [];
    newValue[0] = node.data[0] - 2;
    newValue[1] = node.data[1] + 1;
    if (checkValue(newValue) === null) return;
    const newNode = new Node(newValue);
    node.adjacentNodes.push(newNode);
    newNode.parent = node;
    return newNode;
}

//Left-down [x -2, y -1]
function moveLeftDown(node) {
    let newValue = [];
    newValue[0] = node.data[0] - 2;
    newValue[1] = node.data[1] - 1;
    if (checkValue(newValue) === null) return;
    const newNode = new Node(newValue);
    node.adjacentNodes.push(newNode);
    newNode.parent = node;
    return newNode;
}

function createAdjacentNodes(node) {
    moveUpRight(node);
    moveUpLeft(node);
    moveDownRight(node);
    moveDownLeft(node);
    moveRightUp(node);
    moveRightDown(node);
    moveLeftUp(node);
    moveLeftDown(node);
}


function knightMoves(startValue, endValue) {
    let visited = [];
    let queue = [];
    let path = [];
    if (startValue === endValue) return startValue;
    const startNode = new Node(startValue);
    createAdjacentNodes(startNode);
    let current = startNode;
    queue.push(current);
    while (queue.length > 0) {
        if (current.adjacentNodes) {
            current.adjacentNodes.forEach((node) => {
                queue.push(node);
            });
            //do something
            visited.push(current);
            if (current.data.toString() === endValue.toString()) {
                path.unshift(current.data);
                while (current.parent) {
                    path.unshift(current.parent.data);
                    current = current.parent;
                }
                const numberOfMoves = path.length;
                console.log("You made it in " + numberOfMoves + " moves! Here is your path! ");
                return path;
            }
            queue.shift();
            current = queue[0];
            createAdjacentNodes(current);
        }
    }
}

console.log(knightMoves([3,3],[7,7]));




