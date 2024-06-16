import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		//Scanner in.= new Scanner(System.in);
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		String[] strArr =  input.split(" ");
		double f1 = Double.parseDouble(strArr[0]);
		double f2 = Double.parseDouble(strArr[1]);
		
		System.out.println(String.format("%.06f", f1+f2));
	}
}