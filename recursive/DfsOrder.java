class Main{
    Node root;

    public void dfs(Node root){
        if(root != null){
            //전위순회 System.out.print(root.data + " ");
            dfs(root.lt);
            //중위순회 System.out.print(root.data + " ");
            dfs(root.rt);
            //후위순회 System.out.print(root.data + " ");
        }
    }

    public static void main(String[] args){
        Main tree = new Main();
        tree.root = new Node(1);
        tree.root.lt = new Node(2);
        tree.root.rt = new Node(3);
        tree.root.lt.lt = new Node(4);
        tree.root.lt.rt = new Node(5);
        tree.root.rt.lt = new Node(6);
        tree.root.rt.rt = new Node(7);
        tree.dfs(tree.root);
    }

}

class Node{
    int data;
    Node lt, rt;
    public Node(int val){
        data = val;
        lt = rt = null;
    }
}
