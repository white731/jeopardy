class Api::CategoriesController < ApplicationController
  def index
    render json: Category.all
  end

  # def show
  # end

  def all_cards
    cards = Card.all
    render json: cards.sort_by {|k, v| [k.points, k.category_id]}
  end
end
