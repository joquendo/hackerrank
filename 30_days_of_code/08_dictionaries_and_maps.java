import java.util.*;
import java.io.*;

class Solution{
    public static void main(String []argh){
        
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        Map<String, Integer> phoneBookMap = new HashMap<String, Integer>();
        
        for(int i = 0; i < n; i++){
            String name = in.next();
            int phone = in.nextInt();
            phoneBookMap.put(name, phone);
        }
        
        while(in.hasNext()){
            String s = in.next();
            String name = s;
            if (phoneBookMap.containsKey(name)) {
                System.out.println(name + "=" + phoneBookMap.get(name));
            } else {
                System.out.println("Not found");
            }
        }
        in.close();
    }
}