import java.io.*;
import java.util.*;
class Main {
	public static void main(String[] args) throws Exception {
		/*BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		List<String> strings = new ArrayList<>();

    try {
          String str;
					while (!(str = br.readLine()).equals("")) {
							strings.add(str);
					}
        } catch (IOException e) {
          throw new RuntimeException(e);
    }*/
		
		Scanner in = new Scanner(System.in);
		int strLength = in.nextInt();
    String str = in.next();
		
		String answer = "";
		for(int i = 0 ; i < strLength ; i++){
			if(Character.isUpperCase(str.charAt(i))){
				answer = answer + Character.toString(str.charAt(i)).toLowerCase();
			}else{
				answer = answer + Character.toString(str.charAt(i)).toUpperCase();
			}
		}
		
		System.out.println(answer);
	}
}