# NexaAI — AI Consulting Agency

A beautiful, read-only agency website built autonomously by a Claude cloud agent via **Loop Engineering**.

Each page is a separate Jira story → separate PR → merged by a human. No babysitting required.

## Pages (9 stories, 9 PRs)

| Story | Page | Route |
|-------|------|-------|
| SCRUM-5 | Home | `/` |
| SCRUM-6 | About Us | `/about` |
| SCRUM-7 | Services | `/services` |
| SCRUM-25 | Our Process | `/process` |
| SCRUM-26 | Case Studies | `/case-studies` |
| SCRUM-27 | Team | `/team` |
| SCRUM-28 | Blog & Insights | `/blog` |
| SCRUM-29 | Careers | `/careers` |
| SCRUM-30 | Contact | `/contact` |

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Dark-mode glassmorphism design

## Loop Engineering Pipeline

```
Jira To Do → Claude builds → PR opened → Human merges → repeat daily
```

The agent never pushes to main. Every story gets its own branch and PR.