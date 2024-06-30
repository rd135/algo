package recursive;

import java.util.*;

public class GraphArrayList2 {
	static int n,m = 0;
	static ArrayList<ArrayList<Integer>> graph;
	static int[] ch, dis;
	public void DFS(int v) {
		Queue<Integer> q = new LinkedList<>();
		ch[v] = 1;
		dis[v] = 0;
		q.offer(v);
		while (!q.isEmpty()) {
			int cv = q.poll();
			for(int nv : graph.get(cv)) {
				if(ch[nv] == 0) {
					ch[nv] = 1;
					q.offer(nv);
					dis[nv] = dis[cv] + 1;
				}
			}
			
		}
	}
	
	
	public static void main(String[] args) {
		GraphArrayList2 T = new GraphArrayList2();
		Scanner in=new Scanner(System.in);
		n = in.nextInt();
		m = in.nextInt();
		graph = new ArrayList<ArrayList<Integer>>();
		for(int i = 0 ; i < n ; i++) {
			graph.add(new ArrayList<Integer>());
		}
		ch = new int[n+1];
		for(int i = 0 ; i < m ; i++) {
			int a = in.nextInt();
			int b = in.nextInt();
			graph.get(a).add(b);
		}
		ch[1] = 1;
		T.DFS(1);
		for(int i = 2; i <= n ; i++) {
			System.out.println(i + " : " + dis[i]);
		}
	}

}
