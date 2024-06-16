import java.io.*;
class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		String[] strArr = input.split(" ");
		int i1 = Integer.parseInt(strArr[0]);
		int i2 = Integer.parseInt(strArr[1]);
		
		System.out.println(i1 + i2);
		
	}
}