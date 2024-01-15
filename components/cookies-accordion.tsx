import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CookiesAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full py-2">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What are cookies and why do we use them?
        </AccordionTrigger>
        <AccordionContent>
          Cookies are small text files stored by your web browser when you use
          websites. There are also other technologies that can be used for
          similar purposes like HTML5 Local Storage and local shared objects,
          web beacons, and embedded scripts. These technologies help us do
          things like remembering you and your preferences when you return to
          our sites, measure how you use the website, conduct market research,
          and gather information about the ads you see and interact with.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Operate the site and core services</AccordionTrigger>
        <AccordionContent>
          These cookies are required, and they are used to enable the site and
          related services core functionality. Without them the site could not
          operate, so they cannot be disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Measure performance</AccordionTrigger>
        <AccordionContent>
          These cookies are used to analyze site usage to measure and improve
          performance.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Personalize advertising</AccordionTrigger>
        <AccordionContent>
          These cookies are used to enable us and our partners to serve ads
          more relevant to your interests. Without them you will still see ads,
          but they might not be as relevant to you.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CookiesAccordion;
