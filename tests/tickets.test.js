import test from "node:test";
import assert from "node:assert/strict";
import { tickets } from "../src/data/tickets.js";

test("every ticket has a unique id", () => {
  const ids = tickets.map((ticket) => ticket.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("every ticket has the fields the app renders", () => {
  for (const ticket of tickets) {
    for (const field of ["id", "title", "customer", "status", "priority", "category", "assignee"]) {
      assert.ok(field in ticket, `ticket ${ticket.id} is missing ${field}`);
    }
  }
});

test("status and priority use the expected values", () => {
  for (const ticket of tickets) {
    assert.ok(["Open", "In Progress", "Resolved"].includes(ticket.status), `ticket ${ticket.id} has status ${ticket.status}`);
    assert.ok(["Low", "Medium", "High"].includes(ticket.priority), `ticket ${ticket.id} has priority ${ticket.priority}`);
  }
});
