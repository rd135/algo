import java.io.*;
class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input1 = br.readLine();
		String input2 = br.readLine();
		
		String[] target = input1.split(" ");
		String[] arr = input2.split(" ");
		
		int count = 0;
		
		for(int i = 0 ; i < Integer.parseInt(target[0]) ; i++){
			if(!arr[i].contains(target[1])){
				count++;
			}
		}
		
		System.out.println(count);
	}
}