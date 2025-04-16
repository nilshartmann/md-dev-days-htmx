package nh.recipify.domain.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloWorldController {

    //
    // URL: http://localhost:9080/hello
    //
    @GetMapping("/hello")
    public String hello() {
        return "hello-world";
    }

    // todo:
    //  - hello-htmx-template.jte anlegen und div zurückliefern (hwr)
    //  - GetMapping für /hello-htmx  (hwc)
    //    - mit Header "HX-Request"
    //    - Liefert template "hello-htmx-template" zurück
    @GetMapping(value = "/hello-htmx", headers = "HX-Request")
    String helloHtmx() {

        return "hello-htmx-template";
    }

}

