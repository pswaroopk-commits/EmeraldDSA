# Deployment Guide

## Ownership

The GitHub account, Cloudflare account and domain registrar account should be owned by the business owner or an authorised family/business representative. Enable two-factor authentication on all accounts.

## GitHub

1. Create a new GitHub repository under the owner's account.
2. Push this project folder to the repository.
3. Keep the default production branch as `main` unless you prefer another branch.

## Cloudflare Pages

1. Create or sign in to the Cloudflare account owned by the business.
2. Open Workers and Pages, then create a Pages project.
3. Connect the GitHub repository.
4. Use these build settings:
   - Framework preset: None
   - Build command: leave blank
   - Build output directory: `/`
5. Deploy the production branch.
6. Test the temporary Cloudflare Pages URL on desktop and mobile.

## Domain

Before buying a domain, check current first-year pricing, renewal pricing, taxes and WHOIS privacy. Stop before payment and complete the purchase manually in the owner's registrar account.

Preferred domain order:

1. `emeralddsa.in`
2. `emeralddsa.com`
3. `emeraldloanservices.in`
4. `emeraldloansvizag.in`

## DNS and HTTPS

1. Add the purchased domain to Cloudflare.
2. Follow Cloudflare's current nameserver instructions at the registrar.
3. Add the custom domain to Cloudflare Pages.
4. Configure both root domain and `www`.
5. Choose the canonical domain and redirect the alternate version.
6. Wait for HTTPS to become active.
7. Test root, `www`, mobile layout, call links, WhatsApp links and Google Maps links.
