import { ISite, sites, siteEvents, ISiteEvent } from "../mockdata/sites";

class SiteService {
  static getSites(limit?: number): ISite[] {
    if (limit) {
      return sites.slice(0, limit);
    }
    return [...sites];
  }

  static getSiteById(id: string): ISite | undefined {
    return sites.find(site => site.id === id);
  }

  static getSiteEvents(id: string): ISiteEvent[] {
    return siteEvents.filter(event => event.siteId === id);
  }
}

export default SiteService;