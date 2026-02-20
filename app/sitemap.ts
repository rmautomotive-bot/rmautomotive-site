import { MetadataRoute } from 'next'
import { zones } from '@/lib/zones'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rmautomotive.fr'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/depannage`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/zones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/vente`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ]

  const zonePages: MetadataRoute.Sitemap = zones.map(z => ({
    url: `${base}/zones/${z.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...zonePages]
}
