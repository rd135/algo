import java.io.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		
		int target = Integer.parseInt(input);
		
		Long answer = 1L;
		for(int i = 1 ; i <= target ; i++){
			answer = (answer * i)%1000000007;
		}
		
		System.out.println(answer);
		
	}
}