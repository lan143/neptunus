import { useEffect, useRef } from 'preact/hooks';

/**
 * Verbatim port of the prometey Network page. The `edn-network-ui` package is
 * imported once in `main.tsx`; this component only mounts its custom element
 * imperatively so the element's own lifecycle owns fetching. The firmware
 * Wave 5 registers the `/api/network/*` routes this element talks to.
 */
export function NetworkPage() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = document.createElement('edn-network-page');
    // Same origin by default; use element.setAttribute('base-url', 'http://<device>')
    // to point at another ed-network device (needs CORS on that device).
    host.current?.append(element);
    return () => element.remove();
  }, []);

  return <div ref={host} />;
}
