import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.net.*;

public class link extends Applet implements
    ActionListener {
  Button b;
  TextField t;

  public void init() {
     t = new TextField(20);
     t.setText("http://www.google.com");
     add(t);
     b = new Button("Go to this URL");
     add(b);
     b.addActionListener(this);
  }

  public void actionPerformed(ActionEvent ae) {
     if (ae.getSource() == b) {
       try {
         getAppletContext().showDocument(new URL(t.getText()));
       }
       catch (Exception e) {
         e.printStackTrace();
       }
     }
  }
}
