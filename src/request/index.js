import { toast } from "sonner";

let baseUrl = import.meta.env.VITE_BASE_URL;

export async function getInvoices(route = "invoices", query = "") {
  let url = baseUrl + route + (query ? `?status=${query}` : "");

  let req = await fetch(url);
  if (req.status === 200) {
    let result = await req.json();
    return result.data;
  } else {
    throw new Error("Nimadur hato keti");
  }
}

export async function getInvoice(route = "invoices", id) {
  let url = baseUrl + route + `/${id}`;

  let req = await fetch(url);
  if (req.status === 200) {
    let result = await req.json();
    return result;
  } else {
    return new Error("Nimadur hato keti");
  }
}

export async function deleteById(id, route ="invoices") {
  let url = baseUrl + route + `/${id}`;
  let req = await fetch(url, {
    method: "DELETE",
  });
  if (req.status === 200) {
    return "seccess";
  } else {
    throw new Error("Nimadur hato ketdi");
  }
}

export async function updateById(id, route = "invoices", status) {
  let url = baseUrl + route + `/${id}`;
  let req = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 'status': status }),
  });
  if (req.status === 200) {
    let result = req.json();
    return result;
  } else {
    return new Error("Nimadur hato keti");
  }
}

export async function updateByData(id, route = "invoices", data) {
  let url = baseUrl + route + `/${id}`;
  let req = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data ),
  });
  if (req.status === 200) {
    let result = req.json();
    return result;
  } else {
    toast.error("Nimadur hato keti");
  }
}

export async function addInvoice(data, route = "invoices") {
  let url = baseUrl + route;
  let req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data),
  });
  if (req.status === 200) {
    let result = req.json();
    return result;
  } else {
    return new Error("Nimadur hato keti");
  }
}
