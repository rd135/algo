import java.io.*;
import java.util.*;

public class Sheep {
	static Queue<Integer> q = new LinkedList<>();
	static int[] checker = {-1,1,5};
	static boolean[] root = new boolean[10001];

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] arr = br.readLine().split(" ");
		int start = Integer.parseInt(arr[0]);
		int goal = Integer.parseInt(arr[1]);
		
		System.out.println(bfs(start, goal));
	}
	
	public static int bfs(int start, int goal) {
		q.offer(start);
		int jumpCount = 0;
		root[start] = true;
		while(!q.isEmpty()) {
			int loopLength = q.size();
			for(int i = 0 ; i <loopLength ; i++) {
				int poped = q.poll();
				for(int j = 0; j < 3; j++) {
					int next = checker[j] + poped;
					if(next == goal) return ++jumpCount;
					if(next > 0 && next <= 10001 && root[next] == false) {
						q.offer(next);
						root[next] = true;
					}
				}
			}
			jumpCount++;
		}
		
		return jumpCount;
	}

}
