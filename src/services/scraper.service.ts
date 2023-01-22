import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ScraperService {
  async scrapeClasament() {
    let result;

    try {
      const browser = await puppeteer.launch({
        headless: true,
        slowMo: 100,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const page = await browser.newPage();
      await page.goto(
        'https://www.flashscore.ro/echipa/suceava/SEYT3DvL/clasament/#/GdL4AN9E/table/overall',
      );
      await page.waitForSelector('.tableCellParticipant__name');

      const getContainer = async () => {
        return await page.evaluate(() => {
          const rows = document.querySelectorAll('.ui-table__row');
          const teams = [];
          rows.forEach((row) => {
            const rank = parseInt(
              row.querySelector('.tableCellRank').textContent.replace('.', ''),
            );
            const name = row.querySelector(
              '.tableCellParticipant__name',
            ).textContent;

            teams.push({ rank, name });
          });
          return teams;
        });
      };
      result = await getContainer();

      console.log(result);
      await page.close();
      await browser.close();
    } catch (err) {
      console.log(err);
    }

    return result;
  }
}
