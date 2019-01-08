import java.applet.Applet;
import java.awt.*;
public class applet1 extends Applet{

  String s = "Vertical text";
  int x=10;
  int y=10;
  int v;
public void init() {}

public void paint(Graphics g){
g.drawString("India is democratic",150,135);
g.drawRect(75, 125, 350, 75);
g.drawRect(85, 135, 330, 55);
v=g.getFontMetrics(getFont()).getHeight()+1;
  System.out.println(v);
  int j =0;
  int k= s.length();
  while(j < k+1) {
    if (j == k)
       g.drawString(s.substring(j),x, y+(j*v));
    else
       g.drawString(s.substring(j,j+1),x, y+(j*v));
    j++;
 }
}

}
/*
<applet code="applet1.class" width="500" height="500">
</applet>
*/
