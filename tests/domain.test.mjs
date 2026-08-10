import test from 'node:test'; import assert from 'node:assert/strict';
test('duplicate emails normalize case',()=>{const rows=[{email:'A@EXAMPLE.COM'},{email:'a@example.com'},{email:'b@example.com'}];const counts=rows.reduce((m,r)=>m.set(r.email.toLowerCase(),(m.get(r.email.toLowerCase())||0)+1),new Map());assert.equal([...counts.values()].filter(n=>n>1).length,1);});
