/**
 * Created by Steve on 25/04/2016.
 */
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

public class Annotation {

    public static void main(String[] args) {
    }

    @Override
    @MethodInfo(author = "ssf", comments = "Main method", date = "Apr 25 2016")
    public String toString() {
        return "Overriden toString method";
    }

    @Deprecated
    @MethodInfo(comments = "deprecated method", date = "Apr 25 2016")
    public static void oldMethod() {
        System.out.println("old method, don't use it.");
    }

    @SuppressWarnings({ "unchecked", "deprecation" })
    @MethodInfo(author = "ssf", comments = "Main method", date = "Apr 25 2016", revision = 10)
    public static void genericsTest() throws FileNotFoundException {
        List l = new ArrayList();
        l.add("abc");
        oldMethod();
    }

}